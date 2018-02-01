'use strict';

export default class EBMessageClassifier {
  static dangerMessages = [
    'but with errors',
    'to RED',
    'During an aborted deployment',
    'Failed to deploy application',
    'Failed to deploy configuration',
    'has a dependent object',
    'is not authorized to perform',
    'Stack deletion failed',
    'Unsuccessful command execution',
    'You do not have permission',
    'Your quota allows for 0 more running instance',
    'to Severe.',
    'to Degraded.',
  ];

  static warningMessages = [
    'aborted operation.',
    'to YELLOW',
    'Adding instance ',
    'Deleting SNS topic',
    'is currently running under desired capacity',
    'Pending Initialization',
    'Removed instance ',
    'Rollback of environment',
    'to Info.',
    'to Warning.',
    'to No Data.',
  ];

  static _dangerMessagesRegexp = EBMessageClassifier._messages2regexp(EBMessageClassifier.dangerMessages);
  static _warningMessagesRegexp = EBMessageClassifier._messages2regexp(EBMessageClassifier.warningMessages);

  static isDangerMessage(message) {
    return EBMessageClassifier._dangerMessagesRegexp.test(message);
  }

  static isWarningMessage(message) {
    return EBMessageClassifier._warningMessagesRegexp.test(message);
  }

  static _messages2regexp(messages) {
    // XXX this function cannot handle the regexp special charactors!
    return new RegExp('(?:' + messages.join('|') + ')');
  }
}
