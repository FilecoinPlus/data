# Filecoin Plus data

This repository contains general data for the Filecoin Plus ecosystem.

> *This is work-in-progress and the documentation will soon be improved to cover more details about the project.*

## How it works

We're using GitHub workflows to handle data pipelines by leveraging GitHub's [Flat Data](https://githubnext.com/projects/flat-data/) toolkit. This way, we keep datasets public, versioned, and reusable.

Processing tasks and their outputs are separate from data fetched from the source, making the dataset lifecycle easier to understand while maintaining explainability, so stakeholders can safely and efficiently use the data and audit when necessary.

## Repository structure

The repository has the following structure:

Directory path | Description
-------------- | -----------
[/.github/workflows](/.github/workflows) | Here's where we define how the data pipeline runs and set basic configuration.
[/data](/data) | Holds directories for each data stage.
[/data/raw](/data/raw) | Raw datasets as fetched from source.
[/data/processed](/data/processed) | Datasets that've been processed by scripts in [/postprocessing](/postprocessing).
[/data/generated](/data/generated) | New datasets generated for data integration by scripts in [/postprocessing](/postprocessing).
[/postprocessing](/postprocessing) | This is the home for all processing scripts.
[/typings](/typings) | This is work-in-progress and is expected to hold TypeScript definitions for the data we maintain.
[/utils](/utils) | Holds utility scripts used by processing scripts.

## Data contents

File path | Description
--------- | -----------
[/data/generated/verifiers.json](/data/generated/verifiers.json) | Data of all Verifiers/Notaries pulled from multiple sources, processed, and combined.
[/data/generated/address-mapping.json](/data/generated/address-mapping.json) | Address mapping of on-chain addresses (Filecoin Address ID <-> Filecoin Address Key). Addresses are only added to this file if they exist on-chain (both address types are validated through [Glif's APIs](https://api.node.glif.io/)).
[/data/processed/notary-governance-issues.json](/data/processed/notary-governance-issues.json) | Data extracted from the notary-governance issues and gone through filtering, cleansing, and normalization.
[/data/raw/interplanetaryone-verifiers.json](/data/raw/interplanetaryone-verifiers.json) | Raw data fetched from the `getVerifiers` endpoint of InterPlanetary One's API.
[/data/raw/interplanetaryone-verified-clients.json](/data/raw/interplanetaryone-verified-clients.json) | Raw data fetched from the `getVerifiedClients` endpoint of InterPlanetary One's API.
[/data/raw/notary-governance-issues.json](/data/raw/notary-governance-issues.json) | Raw data fetched from an endpoint running a script to get all issues from the [notary-governance repository](https://github.com/filecoin-project/notary-governance).

## Recommended reading

Here are some recommended readings if you're interested in some of the concepts that have influenced this project.
- https://githubnext.com/projects/flat-data/
- https://github.com/viadee/bpmn.ai-patterns#increasing-levels-of-destruction
