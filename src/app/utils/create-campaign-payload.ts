import { environment } from '../../environments/environment'

export const campaignPayload = {
  step: null,
  sender: environment.letextosender,
  name: 'INSTRUCTION MEGJ',
  campaignType: 'SIMPLE',
  recipientSource: 'CUSTOM',
  groupId: null,
  filename: null,
  saveAsModel: false,
  destination: 'NAT_INTER',
  message: 'message',
  emailText: null,
  recipients: [],
  sendAt: [],
  dlrUrl: '',
  responseUrl: '',
}
