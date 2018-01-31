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
    'Pending to Degraded',
    'Stack deletion failed',
    'Unsuccessful command execution',
    'You do not have permission',
    'Your quota allows for 0 more running instance',
    'Info to Severe',
    'No Data to Severe',
    'Ok to Severe',
    'Ok to Degraded',
    'Info to Degraded',
    'Degraded to Severe',
  ];

  static warningMessages = [
    'aborted operation.',
    'to YELLOW',
    'Adding instance ',
    'Degraded to Info',
    'Deleting SNS topic',
    'is currently running under desired capacity',
    'Ok to Info',
    'Ok to Warning',
    'Info to No Data',
    'Ok to No Data',
    'Pending Initialization',
    'Removed instance ',
    'Rollback of environment',
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
