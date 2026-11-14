---
title: "A switch simulator and configuration tool"
short: "Switch simulator"
hook: "A PyQt6 tool that models an automotive Ethernet switch pipeline (VLAN, address lookup, TCAM filtering, QoS, AVB, egress) and shows exactly where, and why, a frame is dropped."
context: "Developer tooling · automotive Ethernet"
period: "2024 – 2026"
role: "Sole author"
team: "solo"
order: 5
featured: false
confidentiality: "client"
approval: "pending"
page: "summary"
areas: ["Automotive", "Connectivity"]
tags: ["Python", "PyQt6", "lxml", "IEEE 802.1Q", "TCAM", "QoS", "AVB", "Simulation"]
skills:
  - { name: "Python", level: "built" }
  - { name: "Automotive Ethernet switching", level: "built" }
  - { name: "Desktop tools / GUI (Qt)", level: "built" }
metrics: []
---

## Why I built it

The switch configuration lived in large XML files covering both dies and every hardware variant. To know whether a given frame would be forwarded, you had to read the rules by hand, or flash an ECU and try. I wanted to ask the question directly.

## How it works

The tool models a dual-die switch with the internal link between the dies. A frame goes through the stages in the order this switch applies them: port state, VLAN classification, VLAN table lookup, source learning and destination lookup in the address table, VLAN membership filtering, ingress policy in the TCAM, QoS classification, AVB stream policing, egress filtering and tagging, port mirroring, and the logging check. At each stage it records whether the frame passed and which rule decided it. So a drop shows up as "dropped at the TCAM, by this rule", not just "dropped".

The frame's path is animated on a live topology view, and batches of frames can be imported and exported for regression checks. A configuration mode has an editor for each kind of entry, reading and writing the XML with lxml, so nobody has to hand-edit it.
