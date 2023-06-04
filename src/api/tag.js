import request from '@/utils/request'


export function selectAll() {
  return request({
    url: 'api/posts/tag',
    method: 'get',
  })
}

export default { selectAll }
