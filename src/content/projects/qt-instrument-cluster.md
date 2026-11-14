---
title: "Qt 6 instrument cluster with remote control"
short: "Qt cluster"
hook: "A Qt Quick instrument cluster driven over TCP by a separate control panel through a compact binary protocol."
context: "Internal R&D · team demo"
period: "2026"
role: "Navigation, remote control over TCP, control-panel redesign"
team: "team demo"
order: 8
featured: false
confidentiality: "internal"
approval: "pending"
page: "summary"
areas: ["Automotive"]
tags: ["Qt 6", "QML", "C++", "TCP", "Python", "HMI"]
skills:
  - { name: "C++", level: "built" }
  - { name: "Python", level: "built" }
  - { name: "Desktop tools / GUI (Qt)", level: "built" }
metrics: []
---

## In short

A team demo of a car instrument cluster that can be driven live from a second machine. It has driving, maps and media pages, and runs on Windows and Linux.

## How it works

A Qt Quick front end sits on a C++ back end with a simple vehicle model (drive torque, braking and drag turn into speed and battery level). A separate control panel, written in Python, sends pedals, gear, turn signals and destinations to the cluster over TCP using a compact binary protocol, and shows whether the link is up.

## My part

The navigation stack (place search, turn-by-turn routes with arrival time, and a fallback route), remote navigation over TCP, the control-panel redesign, and the build and run scripts. I also designed a bridge in which an Android Automotive app computes navigation and Qt only draws it.
