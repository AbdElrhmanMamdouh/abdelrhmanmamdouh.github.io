---
title: "AI multi-agent test generation for embedded C"
short: "AI test generation"
hook: "A LangGraph pipeline of LLM agents that writes CUnit tests for embedded C from requirements, then builds, runs and measures coverage, and sends every failure back to the agent that caused it."
context: "Internal R&D tool · eJad"
period: "02/2025 – present"
role: "Started the multi-agent approach; sole author of the rewrite"
team: "team tool, three main engineers"
order: 3
featured: true
confidentiality: "internal"
approval: "pending"
page: "summary"
areas: ["AI"]
tags: ["LangGraph", "LangChain", "Python", "Multi-agent systems", "CUnit", "gcov / LCOV", "RAG", "ASPICE SWE.4"]
skills:
  - { name: "Python", level: "built" }
  - { name: "Unit testing / coverage", level: "built" }
  - { name: "LLM agents / LangGraph", level: "built" }
  - { name: "RAG", level: "built" }
  - { name: "Desktop tools / GUI (Qt)", level: "built" }
  - { name: "System architecture", level: "built" }
metrics: []
---

## The problem

Unit verification for automotive software (ASPICE SWE.4) is careful, repetitive work. You read the requirements and the code, write a test specification and the tests, build them against mocks, run them, measure coverage, close the gaps, get the review, and do it again when something changes. A single prompt to an LLM produces tests that look right and often do not compile.

## The idea

Split the job across several agents, and let real tools, not the model's opinion, decide whether each step worked:

- One agent writes a test specification from the requirements, and a reviewer agent checks it.
- Another agent writes CUnit tests from the specification.
- The tests are compiled against mock headers. Build errors go back to a fix agent.
- The tests run, and failures go back too.
- gcov and LCOV measure coverage. Uncovered lines and requirements without a test become new work.
- An analysis step writes the report: recommendations, dead code, and traceability from each requirement to its tests.

Once a set of tests builds, passes and reaches its coverage target, it becomes a locked "golden" baseline, and later rounds can only add to it. When a test file gets too large for the model's output limit, the agent returns a unified diff instead of the whole file.

## The rewrite

I rewrote the tool on my own as a LangGraph state graph declared in YAML: setup, specification, generation, build, test, requirement check, coverage, re-mapping and analysis. Each stage has its own retry limit, and when a stage runs out of retries the graph starts a fresh iteration from a checkpoint. A model layer routes each task to a suitable provider: Gemini on Vertex AI, OpenAI-compatible models such as DeepSeek, or local models through Ollama when code must not leave the machine. Underneath sit Pydantic configuration, dependency injection, an event bus with correlated logs, SQLite storage of every run and LLM call, a pytest suite, a PySide6 GUI and a CLI.

## Around it

I added generation of integration tests (SWE.5). I extended the team's retrieval-based generator for VectorCAST (LangChain, sentence embeddings, FAISS) with new providers and an offline mode. And I built GitHub Copilot agents and skills that turn Markdown test specifications into buildable CUnit suites.

The tool shortened unit-test development on real tasks. It does not replace knowledge of the ECU, though: test-bench scripting and hardware-in-the-loop tests still need an engineer who knows the hardware.
