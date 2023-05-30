#!/usr/bin/env node
import { program } from "commander";

program
  .name("jdsl")
  .description(
    "The marvelous JSON-based Domain Specific Language made by TOM...the genious"
  )
  .action(() => {
    console.log("wtf");
  });

program
  .command("checkout")
  .description("checkout you svn project or die trying")
  .action(() => {
    console.log(`
┌───────────────────────────────────────────────────────────────────┐
│                                                                   │
│  See you in two days...enjoy some solitaire until this finishes.  │
│                                                                   │
│                            ♠ ♣ ♥ ♦                                │
└───────────────────────────────────────────────────────────────────┘`);
  });
program
  .command("run")
  .description("just run your JDSL code")
  .action(() => {
    console.log(`
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                 You wouldn’t want to ‘just’ run it.                 │
│                                                                     │
│        It takes a couple days for a new deployment to finish        │
│                                                                     │
│           starting up. JDSL can be a little slow, but it’s          │
│                                                                     │
│   really powerful. Really powerful. Like I said, Tom is a genius.   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘`);
  });

program
  .command("wat")
  .description(
    "want to know what this is all about? this is the right command for you"
  )
  .action(() => {
    console.log(`
┌───────────────────────────────────────────────────┐
│                                                   │
│                 Just Look at this                 │
│                                                   │
│    https://www.youtube.com/watch?v=QwUPs5N9I6I    │
│                                                   │
└───────────────────────────────────────────────────┘
I promise it's not a rickroll and you wont me disappointed.`);
  });

program.parse();
