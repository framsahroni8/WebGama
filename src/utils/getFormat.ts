export const useDateFormat = (dateFormat: Date) => {
  // Get user from Redux store
  const formattedDate = dateFormat.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  return formattedDate
}

export const formatNumber = (num: number): string => {
  return num.toString().padStart(3, '0')
}
