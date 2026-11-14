---
title: "A switch simulator and configuration tool"
short: "Switch simulator"
hook: "A desktop tool that pushes a frame through every stage of an Ethernet switch and shows where, and why, it was dropped."
context: "Developer tooling · Ethernet switching"
period: "Part of the ADAS ECU project"
role: "Sole author"
team: "solo"
order: 5
featured: false
confidentiality: "client"
approval: "pending"
page: "summary"
areas: ["Automotive", "Connectivity"]
tags: ["Python", "PyQt6", "802.1Q", "TCAM", "QoS", "Simulation"]
skills:
  - { name: "Python", level: "built" }
  - { name: "Automotive Ethernet switching", level: "built" }
  - { name: "Desktop tools / GUI (Qt)", level: "built" }
metrics:
  - { value: "11", label: "switch stages simulated per frame" }
---

## In short

Switch configuration lived in large XML files. Finding out whether a frame would be forwarded meant reading rules by hand, then flashing an ECU and testing. I wrote a desktop tool that answers the question directly.

## What I did

- **A model of the switch**, including two linked switch chips, built in Python with PyQt6.
- **A frame pipeline.** Each frame passes through 11 stages: port state, VLAN assignment and filtering, address lookup and learning, ingress rules, quality of service, audio-video bridging policy, egress, port mirroring and logging. At every stage the tool shows whether the frame passed or was dropped, and which rule decided it.
- **Animation.** The frame moves across a live topology diagram, and batches of frames can be imported and exported.
- **A configuration mode** with editors for each kind of entry, so nobody has to hand-edit the XML.

## Planned

A public re-creation built only from the IEEE 802.1Q standard and Linux switch documentation, with an in-browser version embedded on this page.
