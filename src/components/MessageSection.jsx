import { motion } from 'framer-motion'
import './MessageSection.css'

export default function MessageSection() {
  return (
    <section className="message-section">
      <motion.div
        className="message-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="ring-glow-wrapper">
          <div className="ring-glow">
            <span className="ring-heart">♥</span>
          </div>
        </div>

        <h2 className="message-title">
          <span className="message-lead">يا أغلى إنسانة في حياتي...</span>
          <span className="signature">ملك ❤️</span>
        </h2>

        <motion.p
          className="message-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          عايزك تكوني عارفة إني بحبك جدًا، وبحب هزارك وبحب ضحكتك.. بموت فيكي والله،
          انتي حياتي وانتي عمري، وانتي نجمة وقعت من السما ودخلت جوه قلبي.<br /><br />
          بحب أقضي وقتي معاكي، انتي واخدة كل وقتي ومش هحب حد قدك.. الروح للروح.<br /><br />
          وعايز أقولك على حاجة: أنا لما حبيتك حبيتك بجد، ولا يوم قصرت معاكي يا أحلى بنت في الناس.
          لو أقدر أجيبلك الدنيا كنت جبتهالك، وكنت ناوي أعمل أي حاجة عشانك.<br /><br />
          وعارف إني ممكن أكون قصرت معاكي في حاجات، بس ورب الكون، أنا ما حبيتش حد في الدنيا دي
          قد ما بحبك، حب مش بحبه لنفسي بس.. وعايز أقولك دلوقتي إنك وحشاني.</motion.p>

        <motion.div
          className="message-signature-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        <motion.p
          className="message-from"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          بحبك يا ملك بجد، وربنا يخليكي ليا ويفضل يضحكك طول عمرك ❤️🌹
        </motion.p>
      </motion.div>
    </section>
  )
}
