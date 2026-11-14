---
title: "Open SDV platforms: Eclipse S-CORE and OpenBSW"
short: "Open SDV platforms"
hook: "Hands-on evaluation of two open-source automotive platforms: an ADAS showcase on S-CORE, and OpenBSW on an NXP board in C++ and Rust."
context: "Internal R&D · open-source platforms"
period: "02/2025 – present"
role: "Researcher and builder; author of the internal guides"
team: "R&D team"
order: 7
featured: false
confidentiality: "internal"
approval: "pending"
page: "summary"
areas: ["Automotive"]
tags: ["Eclipse S-CORE", "Eclipse OpenBSW", "C++", "Rust", "Bazel", "NXP S32K148"]
skills:
  - { name: "C++", level: "evaluated" }
  - { name: "Rust (basic)", level: "evaluated" }
  - { name: "UDS / DEM / DTCs", level: "evaluated" }
  - { name: "MACsec / IPsec / crypto", level: "evaluated" }
  - { name: "RTOS / MCU firmware", level: "evaluated" }
  - { name: "Functional safety (ISO 26262)", level: "evaluated" }
metrics:
  - { value: "2", label: "reference demos verified, plus one showcase" }
---

## In short

Open-source platforms for vehicle software are new, and an engineering-services company needs to know what they can do today. I evaluated two of them hands-on.

## Eclipse S-CORE

Open-source middleware for high-performance car computers, in C++ and Rust, built with Bazel. I set it up on Ubuntu, verified two reference demos (zero-copy shared-memory messaging, and orchestration with persistent storage), and built an ADAS showcase on top: perception with a fixed execution order and emergency braking, zero-copy publish and subscribe to many readers, signed messages with tamper detection, and fault-code logging. I also catalogued the project's repositories and open issues to find good first contributions.

## Eclipse OpenBSW

Open-source microcontroller software. I built its reference application for the NXP S32K148 board with GCC and with GCC plus Rust, plus the host build, then flashed and debugged it on the board and drove it over the serial console, including CAN commands.

## Result

Working demos, guides for colleagues, and an internal presentation.
