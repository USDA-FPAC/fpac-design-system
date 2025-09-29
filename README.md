# FPAC Design System

A USDA FPAC design system based on [USWDS](https://designsystem.digital.gov/).  
Provides reusable CSS and documentation for consistent, accessible web experiences.

## Table of Contents
- [Overview](#overview)
- [Background](#background)
- [Installation](#installation)
- [Usage](#usage)
- [Development Server](#development-server)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Release Notes](#release-notes)

## Overview

The FPAC Design System is open source and available to the general public. It consists of two core repositories, both hosted on GitHub:

- **fpac-style**: This is a CSS Framework implementation of the HTML, CSS, and JavaScript required to implement the look and feel of the FPAC Design System.
- **fpac-design-system**: This is the source code for the design system which is based on fpac-style and its accompanying guidelines. It includes a wealth of information including components, variations, code snippets, and guidelines for proper usage.

## Background

This resource was made for use by product teams in FPAC (Farm Production and Conservation - a USDA Mission Area) who want to create beautiful, easy-to-use, and consistent online experiences. It supports the requirements of OMB Memorandum M-16-21, “Federal Source Code Policy: Achieving Efficiency, Transparency, and Innovation through Reusable and Open Source Software". This policy requires agencies to develop plans to release at least 20 percent of new custom-developed source code as Open Source Software (OSS) when commissioning new custom software.

The FPAC Design System was created and is maintained within FPAC's ISSDOB/FBCSS (Information Services Delivery and Operations Branch / FPAC Business Center Support Services). It was initially influenced by the v1.x.x version of the U.S. Web Design System. It follows industry-standard web accessibility guidelines and uses the best practices of existing style libraries and modern web design.

**FPAC Design System vs. FSA Design System**  
The FPAC Design System supersedes the FSA Design System. Please note that both the FSA Design System and FSA Style have been deprecated and are no longer supported.

## Installation

```sh
npm install
npm run build
```

## Usage

Include the compiled CSS in your project:

```html
<link rel="stylesheet" href="dist/fpac-style/styles/fpac-design-system.css">
```

## Development Server

To run the documentation website locally with live reload:

```sh
npm run serve 
```

This will start a local server ( [http://localhost:3000](http://localhost:3000) ) so you can view and develop the documentation site. Once running, you can view the homepage at [http://localhost:3000/fpac-website/pages/home.html](http://localhost:3000/fpac-website/pages/home.html)

## Folder Structure

- `fpac-style/` – CSS and design tokens
- `fpac-design-system/` – Documentation website

## Contributing

At this time, we are not accepting external contributions.

## License

This project is licensed under the [CC0 1.0 Universal (Public Domain Dedication)](./LICENSE).

## Release Notes

Information about the most recent release can always be found in the release history. We include details about significant updates and any backwards incompatible changes along with a list of all changes.

| Version | Date       | Notes                                         |
| ------- | ---------- | --------------------------------------------- |
| 0.1     | 04/16/2025 | Initial project setup and wiring for @uswds/uswds |
| 1.0     | 09/29/2025 | Initial release to GitHub |