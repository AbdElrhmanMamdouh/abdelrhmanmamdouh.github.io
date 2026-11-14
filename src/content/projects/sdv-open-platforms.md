---
title: "Open SDV platforms: Eclipse S-CORE and OpenBSW"
short: "Open SDV platforms"
hook: "Hands-on work with two open-source automotive platforms: a zero-copy ADAS showcase in C++ on Eclipse S-CORE with Bazel, and Eclipse OpenBSW cross-compiled in C++ and Rust for the NXP S32K148."
context: "Internal R&D · open-source platforms"
period: "02/2025 – present"
role: "Researcher and builder; author of the internal build guide"
team: "R&D team"
order: 7
featured: false
confidentiality: "internal"
approval: "pending"
page: "summary"
areas: ["Automotive"]
tags: ["Eclipse S-CORE", "Eclipse OpenBSW", "C++", "Rust", "Bazel", "CMake", "NXP S32K148", "Zero-copy IPC"]
skills:
  - { name: "C++", level: "evaluated" }
  - { name: "Rust (basic)", level: "evaluated" }
  - { name: "RTOS / MCU firmware", level: "evaluated" }
metrics: []
---

## Eclipse S-CORE

S-CORE is open-source middleware for high-performance vehicle computers, written in C++ and Rust and built with Bazel and hermetic toolchains. I set it up natively on Ubuntu and got its reference demos running: zero-copy shared-memory communication, and orchestration together with the runtime and key-value persistency.

Then I built an ADAS showcase on top of it:

- Perception running under S-CORE's fixed-execution-order (FEO) framework, feeding an emergency-braking decision.
- Zero-copy publish and subscribe to many readers, with an Ethernet gateway.
- Signed payloads, so a tampered message is detected and quarantined.
- Fault codes logged as they happen.

To find good first contributions, I wrote a scanner that collects open feature issues across the project's repositories.

## Eclipse OpenBSW

OpenBSW is an open-source basic-software stack for microcontrollers. I built its reference application for the NXP S32K148 with the Arm GNU toolchain, in a plain C++ variant and a C++ plus Rust variant, as well as the POSIX host build. I flashed and debugged it on the board and drove it over the serial console, including CAN commands. Afterwards I wrote a build, flash and debug guide for colleagues.
