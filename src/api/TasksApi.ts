export class TaskApi {
  constructor(ApiClient) {
    this.apiClient = this.apiClient || ApiClient.instance;
  }
}
