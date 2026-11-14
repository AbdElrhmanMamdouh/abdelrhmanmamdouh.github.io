---
title: "A stress-test framework that simulates the switch"
short: "Switch stress tests"
hook: "System-level stress testing in Vector CANoe: a simulated Ethernet switch in CAPL that scripts replies, delays and silence, with AES key wrap and AES-CMAC through an OpenSSL DLL."
context: "Central ADAS ECU · test architecture"
period: "10/2025 – 04/2026"
role: "Designer and main author of the framework"
team: "framework adopted by the team"
order: 4
featured: false
confidentiality: "client"
approval: "pending"
page: "summary"
areas: ["Automotive"]
tags: ["Vector CANoe", "CAPL", "C++", "OpenSSL", "Python", "Test architecture", "Automotive Ethernet"]
skills:
  - { name: "C++", level: "built" }
  - { name: "Python", level: "built" }
  - { name: "AUTOSAR Classic / CDD", level: "production" }
  - { name: "UDS / DEM / DTCs", level: "production" }
  - { name: "Automotive Ethernet switching", level: "production" }
  - { name: "MACsec / IPsec / crypto", level: "built" }
  - { name: "System test frameworks", level: "production" }
  - { name: "System architecture", level: "built" }
metrics: []
---

## Why it was needed

The switch CDD has error paths, timeouts and corner cases that a healthy switch never triggers. On a real ECU you cannot make the switch answer late, answer wrongly or stay silent when you want it to. So those paths stayed untested.

## The approach

I compared two options. One was to test the CDD in isolation with heavy mocking: lots of control, but no real network traffic. The other was a system-level test on real Ethernet, where the switch is replaced by a simulated node. I chose the second for realism and proved it with a small prototype before building it out.

The simulated switch is a CANoe node written in CAPL. For each test case it returns scripted management responses: correct, malformed, delayed, or nothing at all. Python generators build the response dispatcher from a YAML definition, so adding a case means editing data, not code. Because part of the protocol is secured, I wrote a C++ DLL on OpenSSL that gives CAPL AES key wrap and unwrap and AES-CMAC, so the simulated switch can take part in the secure handshake. Each test sends a diagnostic request, lets the CDD react, checks the resulting fault code or data identifier, restores the normal configuration and writes an HTML report.

## What it found

My suites cover link state, the secure handshake and protection status, and they run on ECU hardware. They found real CDD defects. In one, a routine returned a negative response on a management-frame timeout, where the specification asked for a positive response that carries an error status. The team adopted the framework as a template for its own suites.
