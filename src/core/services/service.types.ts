export interface ServiceResponseProps<PayloadProps> {
  message: null | string;
  data: PayloadProps;
  timestamp: string;
  subErrors: unknown;
}
