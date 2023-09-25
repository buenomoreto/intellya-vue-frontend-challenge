export function formatDate(dataOriginal: string): string {
  const dataObj = new Date(dataOriginal)

  const day = dataObj.getDate().toString().padStart(2, '0')
  const month = (dataObj.getMonth() + 1).toString().padStart(2, '0')
  const year = dataObj.getFullYear()
  const hour = dataObj.getHours().toString().padStart(2, '0')
  const minute = dataObj.getMinutes().toString().padStart(2, '0')

  const formattedDate = `${day}/${month}/${year} ás ${hour}:${minute}`
  return formattedDate
}
