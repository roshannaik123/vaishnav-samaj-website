import React from 'react'
import { Calendar, ChevronRight } from 'lucide-react'

const ArticleCard = ({ article, onClick }) => {
  return (
    <div
      className="bg-card border border-border hover:border-accent/60 hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col"
      onClick={onClick}
    >
      {/* Image Wrap */}
      <div className="relative overflow-hidden bg-muted" style={{ paddingBottom: '56%' }}>
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Content Wrap */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          {/* Saffron Category Badge */}
          <span
            className="text-xs px-2 py-0.5 font-medium"
            style={{
              background: 'rgba(230, 81, 0, 0.08)',
              color: '#E65100',
              fontFamily: "'Lora', serif"
            }}
          >
            {article.category}
          </span>
          
          <span
            className="text-xs text-muted-foreground flex items-center gap-1"
            style={{ fontFamily: "'Lora', serif" }}
          >
            <Calendar size={11} className="text-accent" />
            {article.date}
          </span>
        </div>
        
        <h3
          className="text-lg font-semibold mb-3 leading-snug group-hover:text-primary transition-all line-clamp-2"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {article.title}
        </h3>
        
        <p
          className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1"
          style={{ fontFamily: "'Lora', serif" }}
        >
          {article.excerpt}
        </p>
        
        <div
          className="mt-4 flex items-center gap-1 text-primary text-sm font-medium transition-all group-hover:translate-x-1"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Read more <ChevronRight size={14} />
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
