export class TaskApi {
  constructor(ApiClient) {
    this.apiClient = this.apiClient || ApiClient.instance;
  }

  createTask(body, opts, callback) {
    opts = opts || {}
    let postBody = body

  }
}
