import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Rocket, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Надежность и безопасность",
    description: "Ваши данные и средства защищены на высшем уровне благодаря многоуровневой защите."
  },
  {
    icon: TrendingUp,
    title: "Растущий потенциал",
    description: "Платформа позволяет вам участвовать в растущем рынке криптовалют с возможностью множить капитал."
  },
  {
    icon: Rocket,
    title: "Моментальный старт",
    description: "Зарегистрируйтесь и сразу начните торговать, чтобы не упустить прибыльные возможности."
  },
  {
    icon: DollarSign,
    title: "Максимальная прибыль",
    description: "Участвуйте в сделках с минимальными комиссиями и получайте высокий доход от каждого этапа."
  }
];

const ProductDescription: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4"
      >
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-2"
          >
            Coin Lem — платформа, которая открывает{' '}
            <span className="text-blue-600">новые возможности</span> для инвесторов
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/50 backdrop-blur-sm rounded-lg p-4 hover:bg-blue-50 transition-colors duration-300 border border-blue-100/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProductDescription;
