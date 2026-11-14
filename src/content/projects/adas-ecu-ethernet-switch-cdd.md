---
title: "Ethernet switch CDD for a central ADAS ECU"
short: "ADAS switch CDD"
hook: "AUTOSAR Classic Complex Device Driver for a dual-die automotive Ethernet switch: configuration over management frames, UDS and DEM diagnostics, MACsec and DLT on a safety microcontroller."
context: "Central ADAS ECU · German OEM"
period: "08/2024 – present"
role: "CDD developer and integrator on the microcontroller; owner of the switch configuration"
team: "OEM and supplier team"
order: 1
featured: true
confidentiality: "client"
approval: "pending"
page: "summary"
areas: ["Automotive", "Connectivity"]
tags: ["C", "AUTOSAR Classic", "Complex Device Driver", "Automotive Ethernet", "MACsec", "UDS / DEM", "DLT", "CUnit", "ISO 26262"]
skills:
  - { name: "C", level: "production" }
  - { name: "AUTOSAR Classic / CDD", level: "production" }
  - { name: "UDS / DEM / DTCs", level: "production" }
  - { name: "Automotive Ethernet switching", level: "production" }
  - { name: "MACsec / IPsec / crypto", level: "production" }
  - { name: "RTOS / MCU firmware", level: "production" }
  - { name: "Unit testing / coverage", level: "production" }
  - { name: "Functional safety (ISO 26262)", level: "production" }
  - { name: "Static analysis (MISRA C)", level: "production" }
  - { name: "Performance optimisation", level: "production" }
metrics: []
---

## The ECU

A central ADAS ECU joins its SoCs, cameras, radars and the vehicle network through a single automotive Ethernet switch. The safety microcontroller, an AUTOSAR Classic / OSEK system, has to configure that switch, monitor it, secure it and report its faults. It does all of this through a Complex Device Driver (CDD) that talks to the switch with management frames over Ethernet, including a secured variant. The programme runs under ASPICE and ISO 26262 at ASIL B.

## Configuration

I own the switch configuration. With each new specification release I turn the requirements into configuration for both dies of the switch and for every hardware variant: TCAM filtering rules, VLANs, QoS, AVB and port mirroring. When an over-strict filter rule broke map downloads to the vehicle, I found and relaxed it within a day.

## CDD features

In C, I added a fault code for data-path resets and a UDS routine that makes the switch dump its state after a crash. I moved the switch's debug output from UART, which you cannot reach in a vehicle, to DLT over Ethernet. Then I redesigned that DLT output: one large periodic message became several smaller ones sent at different rates, which cut the bandwidth without losing data.

On the diagnostics side I implemented DEM freeze frames and a security fault code derived from the JTAG-lock and secure-boot states. That meant configuring the freeze-frame data in the DEM and adding the ports, runnables, RTE events and task mapping that supply it. I also maintain the MACsec part of the CDD, including the error history kept on the microcontroller.

## Root causes

The bugs I'm happiest to have found:

- **Empty MACsec error history.** The CDD assumed the switch keeps error entries. The switch actually clears them when they are read.
- **A fault code that never fired.** A small delay in the management-frame queue made each polling cycle run slightly long. Over the monitoring window the drift added up, so the time-based counter never reached the point where the fault should be reported.
- **Log drops over UDP.** The largest DLT message no longer fit in a single Ethernet frame once the IP and UDP headers were counted.
- **An ECU that could not be coded.** A reverted change had shifted a memory window shared between the application and the HSM by one byte.
- **A coding check failing during parallel vehicle programming.** Static analysis and logs traced it to an NvM write failure.

## Verification and safety

I set up the CUnit-based unit-test environment under Bazel and designed tests to MC/DC coverage for ASPICE SWE.4. While moving suites to black-box tests I found a data-corruption bug. I also built a system-level stress-test framework that simulates the switch ([separate page](/projects/switch-stress-test-framework/)). For ISO 26262 I automated PIL and SIL reporting, closed gaps against the MCAL safety manual's assumptions of use, and resolved MISRA C (QAC) and CodeSonar findings.
