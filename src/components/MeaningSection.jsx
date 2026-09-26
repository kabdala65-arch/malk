import { motion } from 'framer-motion'
import './MeaningSection.css'

const letters = [
  { l: 'م', text: 'ملكة قلبي، ومفيش زيها حد في الدنيا كلها' },
  { l: 'ل', text: 'لطفها بيداوي أي تعب، وابتسامتها بتنوّر يومي' },
  { l: 'ك', text: 'كل حياتي بقت أحلى من ساعة ما دخلت فيها' },
]

export default function MeaningSection() {
  return (
    <section className="meaning-section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">بحبك</span>
        <h2 className="section-title">مش مجرد كلمة بقولهالك</h2>
        <p className="section-subtitle">
          دي إحساس نابع من جوه قلبي، وكل حرف في اسمك ليه معنى عندي ♥
        </p>
      </motion.div>

      <div className="meaning-grid">
        {letters.map((item, i) => (
          <motion.div
            key={i}
            className="meaning-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <span className="meaning-letter">{item.l}</span>
            <span className="meaning-text">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
