---
title: "Bluetooth and Wi-Fi over Ethernet"
short: "BT/Wi-Fi over Ethernet"
hook: "How do you run wireless phone projection on a cluster with no radio? A two-ECU architecture, and a proof of concept on an ESP32."
context: "Connectivity and cluster ECUs · motorcycle OEM"
period: "10/2026 – 11/2026"
role: "Architect; sole builder of the proof of concept"
team: "solo proof of concept, reviewed with the customer team"
order: 6
featured: false
confidentiality: "client"
approval: "pending"
page: "summary"
areas: ["Connectivity", "Automotive"]
tags: ["System architecture", "SOME/IP", "Bluetooth", "ESP32 / ESP-IDF", "BlueZ / D-Bus", "IPsec", "pytest"]
skills:
  - { name: "C", level: "built" }
  - { name: "Python", level: "built" }
  - { name: "AUTOSAR Classic / CDD", level: "built" }
  - { name: "MACsec / IPsec / crypto", level: "built" }
  - { name: "SOME/IP", level: "built" }
  - { name: "Bluetooth Classic / BLE", level: "built" }
  - { name: "RTOS / MCU firmware", level: "built" }
  - { name: "Unit testing / coverage", level: "built" }
  - { name: "System test frameworks", level: "built" }
  - { name: "System architecture", level: "built" }
metrics:
  - { value: "1,500+", label: "automated tests and checks" }
  - { value: "16", label: "checks on hardware with a real phone" }
---

## In short

A Linux instrument cluster has to run wireless phone projection, but the only Bluetooth and Wi-Fi radio sits in a different ECU, and the two are joined only by Ethernet. The projection software on the cluster expects a local Bluetooth service and cannot be changed. I designed how the two ECUs share the radio, then built the proof of concept alone.

## Key decisions

- **One Bluetooth stack**, on the radio ECU only. The cluster gets a thin proxy that looks local to the software above it.
- **The radio ECU decides.** A policy manager on the radio ECU owns connections; the cluster asks and is granted. The radio ECU can reconnect phones by itself when the cluster is off.
- **SOME/IP over TCP for control**, and a stream service that resumes from the last byte after a link drop.
- **Phone network traffic** through a tunnel protected by IPsec, sized so packets still fit after the extra headers.
- **Security.** I pointed out that the chosen IPsec mode authenticates but does not encrypt, and raised it as a customer decision.

## Proof of concept

An ESP32 plays the radio ECU, a Linux PC plays the cluster, and a real Android phone connects through them. A simulation model of the whole gateway runs the same scenarios without hardware. It is verified by 56 scenarios, 928 Python tests and 607 C unit checks, plus 16 checks on hardware with a real phone.
