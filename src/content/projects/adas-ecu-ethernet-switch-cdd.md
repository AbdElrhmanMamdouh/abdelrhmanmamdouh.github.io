---
title: "Ethernet switch CDD for a central ADAS ECU"
short: "ADAS switch CDD"
hook: "The AUTOSAR Classic Complex Device Driver (CDD) and configuration for the Ethernet switch inside a central ADAS ECU, with the tests that found its hidden defects."
context: "Central ADAS ECU · German OEM"
period: "08/2024 – present"
role: "Developer and integrator on the microcontroller side; owner of the switch configuration"
team: "OEM and supplier team"
order: 1
featured: true
confidentiality: "client"
approval: "pending"
page: "summary"
areas: ["Automotive", "Connectivity"]
tags: ["C", "AUTOSAR Classic", "Automotive Ethernet", "MACsec", "UDS / DEM", "DLT", "CUnit", "ISO 26262"]
skills:
  - { name: "C", level: "production" }
  - { name: "AUTOSAR Classic / CDD", level: "production" }
  - { name: "UDS / DEM / DTCs", level: "production" }
  - { name: "Automotive Ethernet switching", level: "production" }
  - { name: "MACsec / IPsec / crypto", level: "production" }
  - { name: "SOME/IP", level: "production" }
  - { name: "RTOS / MCU firmware", level: "production" }
  - { name: "Unit testing / coverage", level: "production" }
  - { name: "Functional safety (ISO 26262)", level: "production" }
  - { name: "Static analysis (MISRA C)", level: "production" }
  - { name: "Performance optimisation", level: "production" }
metrics:
  - { value: "~60%", label: "less switch-log bandwidth, no data lost" }
  - { value: "2", label: "field issues fixed within a day" }
---

## In short

A central ADAS ECU connects its processors, cameras, radars and the vehicle network through one automotive Ethernet switch. The safety microcontroller has to configure that switch, watch it, secure it, and report faults through diagnostics. I work on the switch CDD in that microcontroller software, on AUTOSAR Classic, in a series-production programme run under ASPICE and ISO 26262.

## What I did

- **Switch configuration.** I am the only engineer on the switch configuration: filtering rules, VLANs, quality of service, audio-video bridging and port mirroring, kept in step with each new specification release.
- **CDD features in C.** A fault code for data-path resets, a diagnostic routine that captures a switch crash dump, and a redesign of the switch's debug logging that cut its bandwidth by about 60% without losing data.
- **Diagnostics and security.** Freeze frames for fault codes, a security fault code built from the debug-lock and secure-boot states, and maintenance of the MACsec part of the CDD.
- **Root causes.** Lost MACsec error history (the switch clears entries when they are read), a missing fault code caused by a small queue delay that added up over time, and log drops caused by a message that no longer fit once all the network headers were counted.
- **Testing.** The unit-test framework with MC/DC test design, and a stress-test framework that simulates the switch ([see that project](/projects/switch-stress-test-framework/)).
