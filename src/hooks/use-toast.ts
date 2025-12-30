import { useCallback } from 'react'

type ToastPayload = { title: string; description?: string }

export const useToast = () => {
  const toast = useCallback((payload: ToastPayload) => {
    alert(`${payload.title}${payload.description ? `\n${payload.description}` : ''}`)
  }, [])

  return { toast }
}
