import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const ImpactMetrics = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { number: 20, suffix: '+', label: 'Projets Structurés' },
    { number: 150, suffix: 'M', prefix: '$', label: 'Capitaux Mobilisés' },
    { number: 3, label: "Continents d'Impact" },
    { number: 2026, label: 'Horizon IYWF Participation' },
  ];

  return (
    <section className="stats-bar" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <div className="stat-item">
                <span className="stat-number">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      prefix={stat.prefix || ''}
                      suffix={stat.suffix || ''}
                    />
                  ) : (
                    '0'
                  )}
                </span>
                <span className="stat-label">{stat.label}</span>
              </div>
              {i < stats.length - 1 && <div className="stat-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
