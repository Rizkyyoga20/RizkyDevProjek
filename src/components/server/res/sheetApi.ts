import fetchJsonp from 'fetch-jsonp'

const SCRIPT_URL = ''

interface bukuAgenda {
  idAgenda?: number
  noSurat: string
  nik: string
  tglAgenda: string
  tglSurat: string
  jenisSurat: string
  pengirim: string
  perihal: string
  tujuan: string
  statusKirim: string
}


async function gasRequest(action: string, params: Record<string, any> = {}) {
  const query = new URLSearchParams({ action,...params, callback: '?' }).toString()
  const response = await fetchJsonp(`${SCRIPT_URL}?${query}`, { timeout: 25000 })
  const res = await response.json()
  if (res.status === 'error') throw new Error(res.message)
  return res.data
}

// READ
async function ListBukuAgenda(): Promise<bukuAgenda[]> {
  return await gasRequest('read')
}

// CREATE
async function CreateBukuAgenda(data: bukuAgenda) {
  return await gasRequest('create', data)
}

// UPDATE
async function UpdateBukuAgenda(data: bukuAgenda) {
  return await gasRequest('update', data)
}

// DELETE
async function DeleteBukuAgenda(idAgenda: number) {
  return await gasRequest('delete', { idAgenda })
}