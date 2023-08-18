import { post } from '@/request'

export default class UserApi {
  static loginReq(data){
    return post('/token',data)
  }
}
