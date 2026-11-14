---
title: "Bluetooth and Wi-Fi over Ethernet"
short: "BT/Wi-Fi over Ethernet"
hook: "A two-ECU architecture that serves Bluetooth and Wi-Fi from an AUTOSAR Classic radio ECU to a Linux cluster over SOME/IP, proven with ESP32 firmware and a BlueZ-compatible D-Bus facade."
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
tags: ["System architecture", "SOME/IP", "Bluetooth Classic / BLE", "ESP32 / ESP-IDF", "FreeRTOS", "BlueZ / D-Bus", "IPsec", "pytest"]
skills:
  - { name: "C", level: "built" }
  - { name: "Python", level: "built" }
  - { name: "MACsec / IPsec / crypto", level: "built" }
  - { name: "SOME/IP", level: "evaluated" }
  - { name: "Bluetooth Classic / BLE", level: "built" }
  - { name: "RTOS / MCU firmware", level: "built" }
  - { name: "Unit testing / coverage", level: "built" }
  - { name: "System test frameworks", level: "built" }
  - { name: "System architecture", level: "built" }
metrics: []
---

## The problem

A Linux instrument cluster has to run wireless phone projection. The projection stack is certified and cannot be changed, and it expects a local Bluetooth service and local RFCOMM sockets. But the only Bluetooth and Wi-Fi radio sits in a separate AUTOSAR Classic connectivity ECU, and the two ECUs share nothing except Ethernet. There is no file-descriptor passing, no shared memory and no HCI passthrough.

## The architecture

I designed it around a few decisions:

- **One Bluetooth stack, on the radio ECU.** Multiplexing HCI between two hosts was rejected.
- **A thin client proxy on the cluster.** To the software above it, the proxy looks like a local BlueZ service. D-Bus over Ethernet was rejected.
- **The radio ECU decides.** A policy manager there owns connections, with the cluster requesting and being granted. It reconnects bonded phones by itself when the cluster is off.
- **SOME/IP over TCP for control.** Profile data goes through a stream service with byte offsets and acknowledgements, so it resumes where it stopped after a link drop.
- **Phone IP traffic through a layer-2 GRETAP tunnel under IPsec,** so the phone's Wi-Fi client sits on the cluster's subnet, with the inner MTU reduced and TCP MSS clamped so packets still fit after the extra headers.

On security, I pointed out that IPsec AH authenticates traffic but does not encrypt it. Fields that carry secrets therefore need ESP or encryption at the application layer. I raised that as a decision for the customer.

## The proof of concept

I built it on real hardware. An ESP32 plays the radio ECU: C firmware on ESP-IDF and FreeRTOS with Bluedroid for Classic and BLE, plus OTA updates. A Linux PC plays the cluster, with a BlueZ-compatible facade on a private D-Bus. A real Android phone connects through both. JSON over TCP stands in for SOME/IP, and HMAC-SHA256 mutual authentication stands in for link protection.

A virtual-time simulation of the whole gateway runs the same scenarios without hardware: connection order, reconnects, losing the cluster, link drops, faults, several phones and teardown. The scenarios run against the model and, where possible, on the hardware. Unit tests cover the Python side with pytest and the pure-logic C modules on the host. The results went back to the customer as requirements for the production stack, along with a go / no-go recommendation.
