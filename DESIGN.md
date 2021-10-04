# Design Doc


## Objective

Create a download service which will be triggered when the user chooses to download a file. Users will have options to choose different formats or resolutions. As an extra feature we would like to provide users with an option to download files with metadata preserved .

## Goals

A new micro service that can download files embedded with metadata.

## Overview

Our system allows single and multiple file downloads. Files can be downloaded in the format it was uploaded to our system. There should be an option for users to download in multiple formats or resolutions.

We are doing file conversions as part of uploads now. This is an unnecessary step for upload, but quite necessary for the new format based download we are proposing. By separating conversions from upload, we can also reduce our upload processing time.

## Detailed Design

Create a service which will accept an S3 URL, desired file format, a set of metadata and  produce the new file. This file will be uploaded to a temporary S3 bucket, and send the new URL back to the API.

Back-end API makes a request to the download service.Download service immediately responds with a URL that can be polled. Initially responds with something like “work in progress, come back later” while the backend works on getting it ready.

Download service does some processing work.So, download service needs some kind of queue of its own. Probably there’s something on npm that would be useful, but we might be able to implement one ourselves.Probably we do not need to use Amazon SQS. This queue works needs to be communicated to the user.

On download, we are providing the users an option to attach metadata to their files. As a first pass, we are planning to add Title, location, description, time metadata to our file. We have found a couple of tools that could ease that task for us.
https://github.com/hMatoba/piexifjs was a good one but might be abandoned.
https://exiftool.org/ is good one to write metadata
https://www.npmjs.com/package/exiftool-wrapper

Download service uploads new derived file to S3 and the status changes to something like “work complete, here’s the URL of the derived file in S3”

The URL will be timed and be deleted after a certain period of time. Then the status could be “the URL has expired”.

As an initial step we will start with implementing the download service for images and then we will move on to other formats.

On the frontend, the user will have the option to select the file types and a checkbox to opt for metadata incorporated file. Also thinking of adding options to choose resolutions.