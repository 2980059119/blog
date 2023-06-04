import request from '@/utils/request'


export function selectOne(id) {
  return request({
    url: `/api/posts/article/${id}`,
    method: 'get'
  })
}

export function selectAll(page) {
  return request({
    url: `/api/posts`,
    method: 'get',
    params: page
  })
}

export default {selectAll, selectOne}
