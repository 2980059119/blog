import request from '@/utils/request'


export function selectAll(data) {
  return request({
    url: 'api/posts/categories',
    method: 'get',
    data
  })
}

export default {  selectAll }
