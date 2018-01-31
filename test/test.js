'use strict';

import assert from 'power-assert';
import EBMessageClassifier from '../lib/index.js';

describe('Danger message', () => {
  it('should be treated as danger message', () => {
    const message = "Environment health has transitioned from Info to Degraded";
    assert(EBMessageClassifier.isDangerMessage(message) === true);
  });

  it('should not be treated as danger message', () => {
    const message = "Environment health has transitioned from Degraded to Ok";
    assert(EBMessageClassifier.isDangerMessage(message) === false);
  });
});

describe('Warning message', () => {
  it('should be treated as warning message', () => {
    const message = "Environment health has transitioned from Ok to Info";
    assert(EBMessageClassifier.isWarningMessage(message) === true);
  });

  it('should not be treated as warning message', () => {
    const message = "Environment health has transitioned from Info to Degraded";
    assert(EBMessageClassifier.isWarningMessage(message) === false);
  });
});

