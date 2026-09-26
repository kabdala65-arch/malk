import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { registerMedia, notifyPlaying, notifyStopped } from '../utils/mediaCoordinator'
import './VideoMessageSection.css'

// لإضافة الفيديوهات:
// حطي الـ 3 فيديوهات في مجلد public/video وسميهم بالظبط:
// our-video-1.mp4, our-video-2.mp4, our-video-3.mp4
// مفيش أي تعديل تاني مطلوب — الموقع هيعرضهم تلقائي.
// وبمجرد ما أي فيديو يتشغل، صوت الموسيقى وأي صوت تاني في الصفحة
// (وباقي الفيديوهات) هيوقف تلقائي عشان صوته يبقى واضح لوحده.

const videos = [
  { id: 'video-1', src: '/video/our-video-1.mp4', caption: 'لحظة من أحلى اللحظات' },
  { id: 'video-2', src: '/video/our-video-2.mp4', caption: 'حاجة حبيت تشوفيها تاني' },
  { id: 'video-3', src: '/video/our-video-3.mp4', caption: 'وده كمان من قلبي ليكي' },
]

function VideoCard({ id, src, caption }) {
  const [videoAvailable, setVideoAvailable] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    const unregister = registerMedia(id, {
      pause: () => videoRef.current?.pause(),
    })
    return unregister
  }, [id])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const onPlay = () => notifyPlaying(id)
    const onPause = () => notifyStopped(id)
    const onError = () => setVideoAvailable(false)
    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)
    video.addEventListener('ended', onPause)
    video.addEventListener('error', onError)
    return () => {
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
      video.removeEventListener('ended', onPause)
      video.removeEventListener('error', onError)
    }
  }, [id])

  return (
    <motion.div
      className="video-card"
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7 }}
    >
      {videoAvailable ? (
        <video
          ref={videoRef}
          className="video-player"
          src={src}
          controls
          playsInline
          preload="metadata"
          onError={() => setVideoAvailable(false)}
        />
      ) : (
        <div className="video-placeholder">
          <span className="video-placeholder-icon">▶</span>
          <p>لسه معملتش أبلود للفيديو — حطيه في public/video باسم {src.split('/').pop()}</p>
        </div>
      )}
      <p className="video-caption">{caption}</p>
    </motion.div>
  )
}

export default function VideoMessageSection() {
  return (
    <section className="video-section" id="video">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">رسايل فيديو</span>
        <h2 className="section-title">شوفيني بقلبي أقولهالك</h2>
        <p className="section-subtitle">حبيت تشوفي وشي وأنا بقولك كل ده ♥</p>
      </motion.div>

      <div className="video-grid">
        {videos.map((v) => (
          <VideoCard key={v.id} {...v} />
        ))}
      </div>
    </section>
  )
}
