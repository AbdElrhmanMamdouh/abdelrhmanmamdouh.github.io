---
title: "AI multi-agent test generation for embedded C"
short: "AI test generation"
hook: "A pipeline of LLM agents that writes unit tests for embedded C, builds and runs them, measures coverage and fixes its own mistakes."
context: "Internal R&D tool · eJad"
period: "02/2025 – present"
role: "Started the multi-agent approach; sole author of the 2026 rewrite"
team: "team tool, three main engineers"
order: 3
featured: true
confidentiality: "internal"
approval: "pending"
page: "summary"
areas: ["AI"]
tags: ["LangGraph", "Python", "Multi-agent systems", "CUnit", "RAG", "ASPICE SWE.4"]
skills:
  - { name: "Python", level: "built" }
  - { name: "Unit testing / coverage", level: "built" }
  - { name: "LLM agents / LangGraph", level: "built" }
  - { name: "RAG", level: "built" }
  - { name: "Desktop tools / GUI (Qt)", level: "built" }
  - { name: "System architecture", level: "built" }
metrics:
  - { value: "60%", label: "less unit-test development time, measured on a task" }
  - { value: "30%", label: "less effort in a commercial test tool" }
---

## In short

Writing unit tests for automotive software is slow, careful work: read the requirements and the code, write tests, run them, measure coverage, get reviewed, repeat. I started an approach where several LLM agents share that work, each checking the others' output against real tools, not opinions.

## How it works

- **Generate.** One agent writes a test specification from the requirements, another writes the tests.
- **Build and fix.** The tests are compiled; build errors go back to an agent that fixes them.
- **Run and measure.** Tests run, coverage is measured, and gaps go back as new work.
- **Check requirements.** Every requirement must be traced to at least one test.
- **Keep what works.** Once tests pass and meet coverage, they are locked; later rounds can only add.

The 2026 rewrite, which I wrote alone, organises this as a LangGraph state graph with retry limits per stage, routing of each task to a suitable cloud or local model, and a desktop GUI.

## Result

Unit-test development time dropped by 60% on a measured task, and effort in a commercial test tool by 30%. I also extended the team's retrieval-based generator, added integration-test generation, and built GitHub Copilot agents that turn test specifications into buildable test suites.

## Limits

It does not help with test-bench scripting or hardware-specific configuration, and hardware-in-the-loop tests still need human knowledge of the ECU.
