import { useState, useEffect } from 'react'

export function usePushNotifications() {
  const [permission, setPermission] = useState(
    typeof Notification !== 'undefined' ? Notification.permission : 'denied'
  )

  useEffect(() => {
    if (typeof Notification !== 'undefined') {
      setPermission(Notification.permission)
    }
  }, [])

  const requestPermission = async () => {
    if (typeof Notification === 'undefined') return 'denied'
    const result = await Notification.requestPermission()
    setPermission(result)
    return result
  }

  const notify = (title, body, icon = '/icon-192.png') => {
    if (permission !== 'granted') return
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(reg => {
        reg.showNotification(title, { body, icon, badge: '/icon-192.png', vibrate: [200, 100, 200] })
      })
    } else {
      new Notification(title, { body, icon })
    }
  }

  return { permission, requestPermission, notify }
}
