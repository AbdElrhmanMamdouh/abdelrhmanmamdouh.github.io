---
title: "Qt 6 instrument cluster with remote control"
short: "Qt cluster"
hook: "A Qt 6 / QML instrument cluster with a C++ vehicle model and map navigation, driven over TCP by a Python control panel through a compact binary protocol."
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
tags: ["Qt 6", "QML", "C++", "Qt Location", "TCP", "Binary protocol", "Python", "HMI"]
skills:
  - { name: "C++", level: "built" }
  - { name: "Python", level: "built" }
  - { name: "Desktop tools / GUI (Qt)", level: "built" }
metrics: []
---

## The demo

This is a team demo of an instrument cluster you can drive live from a second machine. The front end is Qt Quick / QML on a C++ back end. A vehicle controller is exposed to QML as a singleton, and a small physics model turns drive torque, braking and drag into speed and battery level on a fixed tick. It has driving, maps and media pages, and runs on Windows and on Linux with Wayland and Weston.

A separate control panel, written in Python with Tkinter, sends pedals, gear, turn signals, destination searches and page changes to a TCP server in the cluster. They talk through a compact binary framed protocol, and the panel shows whether the link is up.

## My part

I built the navigation stack: place search, turn-by-turn routing with an arrival time, and a fallback route, all with Qt Location and Qt Positioning. I also built remote navigation over TCP, redesigned the control panel, and wrote the cross-platform build and run scripts. Separately, I designed a bridge in which an Android Automotive app runs navigation and sends a versioned Protobuf state over WebSocket, so the Qt cluster only has to draw it.
