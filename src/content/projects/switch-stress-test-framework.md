---
title: "A stress-test framework that simulates the switch"
short: "Switch stress tests"
hook: "On a real ECU you cannot make the switch misbehave on demand, so I built a simulated switch that does."
context: "Central ADAS ECU · test architecture"
period: "Part of the ADAS ECU project"
role: "Designer and main author of the framework"
team: "framework reused by the team"
order: 4
featured: false
confidentiality: "client"
approval: "pending"
page: "summary"
areas: ["Automotive"]
tags: ["Vector CANoe", "CAPL", "C++", "OpenSSL", "Python", "Test architecture"]
skills:
  - { name: "C++", level: "built" }
  - { name: "Python", level: "built" }
  - { name: "AUTOSAR Classic / CDD", level: "production" }
  - { name: "UDS / DEM / DTCs", level: "production" }
  - { name: "Automotive Ethernet switching", level: "production" }
  - { name: "MACsec / IPsec / crypto", level: "built" }
  - { name: "System test frameworks", level: "production" }
  - { name: "System architecture", level: "built" }
metrics:
  - { value: "46", label: "tests I wrote; they found real CDD defects" }
  - { value: "90", label: "tests on the framework, team-wide" }
---

## In short

The switch CDD has error paths, timeouts and corner cases that never happen on a healthy bench. To test them, I replaced the real switch with a simulated one that answers exactly as each test case says, including wrong answers, late answers and no answer at all.

## What I did

- **Chose the approach.** I compared testing the CDD in isolation with heavy mocking against a system-level test on real Ethernet with a simulated switch. I chose the second for realism, and proved it with a small prototype first.
- **Built the simulated switch** as a node in Vector CANoe, written in CAPL, that returns scripted replies per test case.
- **Generated the boring parts.** Python generators build the reply dispatcher from a definition file, so adding a case means editing data, not code.
- **Handled the secure side.** A small C++ library on OpenSSL provides AES key wrap and AES-CMAC, so the simulated switch can take part in the secure protocol.
- **Made it safe to run.** Each test restores the normal configuration afterwards and writes an HTML report.

## Result

My 46 tests found real defects. One example: on a timeout, a routine answered with a negative response where the specification asked for a positive response carrying an error status. The team adopted the framework and reused it for 90 tests in total.
