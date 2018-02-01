aws_eb_message_severity
==

[![Build Status](https://travis-ci.org/moznion/aws_eb_message_severity.svg?branch=master)](https://travis-ci.org/moznion/aws_eb_message_severity) [![npm version](https://badge.fury.io/js/aws_eb_message_severity.svg)](https://badge.fury.io/js/aws_eb_message_severity) [![devDependencies Status](https://david-dm.org/moznion/aws_eb_message_severity/dev-status.svg)](https://david-dm.org/moznion/aws_eb_message_severity?type=dev)

A classifier of AWS Elastic Beanstalk message by severity level.

Synopsis
--

```javascript
import SeverityClassifier from 'aws_eb_message_severity';

const isDanger = SeverityClassifier.isDangerMessage('message');
const isWarning = SeverityClassifier.isWarningMessage('message');
```

Methods
--

### `.isDangerMessage(msg: string): bool`

Returns whether the given message is a danger or not.

### `.isWarningMessage(msg: string): bool`

Returns whether the given message is a warning or not.

Properties
--

### `.dangerMessages`

Returns a list of messages that are treated as the danger.

### `.warningMessages`

Returns a list of messages that are treated as the danger.

Disclaimer
--

This is alpha quality. Probably sentence coverage is not perfect.

Author
--

moznion (<moznion@gmail.com>)

License
--

MIT

