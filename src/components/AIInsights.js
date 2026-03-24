import React, { useEffect, useState } from 'react';
import { analyzeHistory, generateInsights, WEAKNESS_EXPLANATIONS } from '../utils/insightsEngine';
import './AIInsights.css';

export default function AIInsights({ testCollections }) {
  const [insights, setInsights] = useState(undefined); // undefined = loading

  useEffect(() => {
    const timer = setTimeout(() => {
      const data = analyzeHistory(testCollections);
      setInsights(generateInsights(data));
    }, 60);
    return () => clearTimeout(timer);
  }, [testCollections]);

  if (insights === undefined) {
    return (
      <div className="ai-state-center">
        <div className="ai-spinner" />
        <p>Analyzing your practice history…</p>
      </div>
    );
  }

  if (!insights) {
    return (
      <div className="ai-state-center">
        <div className="ai-empty-icon">🎯</div>
        <h3>No completed tests yet</h3>
        <p>
          Finish a test and view your results to unlock AI Insights. Your personal
          learning analysis will appear here.
        </p>
      </div>
    );
  }

  const { overview, skillBreakdown, weaknesses, strengths, suggestions, trend, dataQuality, testCount } =
    insights;

  return (
    <div className="ai-insights-body">
      {/* Light-data notice */}
      {dataQuality === 'light' && (
        <div className="ai-notice">
          Analysis based on {testCount} completed test{testCount > 1 ? 's' : ''}. Complete
          more tests for deeper pattern detection.
        </div>
      )}

      {/* Overview row */}
      <div className="ai-overview-row">
        <div className="ai-stat-card">
          <div className="ai-stat-value">{overview.totalCompleted}</div>
          <div className="ai-stat-label">Tests Done</div>
        </div>
        {overview.averageBand != null && (
          <div className="ai-stat-card">
            <div className="ai-stat-value">{overview.averageBand}</div>
            <div className="ai-stat-label">Avg Band</div>
          </div>
        )}
        {overview.latestBand != null && (
          <div className="ai-stat-card">
            <div className="ai-stat-value">{overview.latestBand}</div>
            <div className="ai-stat-label">Latest Band</div>
          </div>
        )}
        {trend && (
          <div className={`ai-stat-card ai-trend-card-${trend.direction}`}>
            <div className="ai-stat-value">
              {trend.direction === 'improving' ? '↑' : trend.direction === 'declining' ? '↓' : '→'}
            </div>
            <div className="ai-stat-label">
              {trend.direction === 'improving'
                ? `+${trend.delta} trend`
                : trend.direction === 'declining'
                ? `${trend.delta} trend`
                : 'Steady'}
            </div>
          </div>
        )}
      </div>

      {/* Trend message */}
      {trend && (
        <div className={`ai-trend-msg ai-trend-msg-${trend.direction}`}>
          {trend.direction === 'improving' &&
            `Your band score has risen from an average of ${trend.firstAvg} to ${trend.recentAvg} across your recent tests. Your practice is paying off — keep pushing.`}
          {trend.direction === 'steady' &&
            `Your band scores are consistent around ${trend.recentAvg}. Consistency is good, but to break through to the next band, focus on your weakest question type below.`}
          {trend.direction === 'declining' &&
            `Your recent band scores have dipped to around ${trend.recentAvg}. This sometimes signals rushed practice or fatigue — try slowing down on difficult passages and double-checking your answers.`}
        </div>
      )}

      {/* Skill breakdown */}
      {skillBreakdown.length > 0 && (
        <div className="ai-section">
          <h3 className="ai-section-title">Skill Breakdown</h3>
          <div className="ai-skill-list">
            {skillBreakdown.map(skill => (
              <div key={skill.type} className="ai-skill-row">
                <div className="ai-skill-name">{skill.label}</div>
                <div className="ai-bar-track">
                  <div
                    className={`ai-bar-fill ${
                      skill.accuracy < 60
                        ? 'bar-weak'
                        : skill.accuracy < 75
                        ? 'bar-medium'
                        : 'bar-strong'
                    }`}
                    style={{ width: `${skill.accuracy}%` }}
                  />
                </div>
                <div className="ai-skill-pct">{skill.accuracy}%</div>
              </div>
            ))}
          </div>
          <div className="ai-bar-legend">
            <span className="legend-dot dot-weak" /> Needs work (&lt;60%)
            <span className="legend-dot dot-medium" /> Developing (60–74%)
            <span className="legend-dot dot-strong" /> Strong (75%+)
          </div>
        </div>
      )}

      {/* Areas to improve */}
      {weaknesses.length > 0 && (
        <div className="ai-section">
          <h3 className="ai-section-title">Areas to Improve</h3>
          <div className="ai-weakness-list">
            {weaknesses.slice(0, 4).map(w => (
              <div key={w.type} className="ai-weakness-card">
                <div className="ai-weakness-header">
                  <span className="ai-weakness-name">{w.label}</span>
                  <span className="ai-weakness-stat">
                    {w.accuracy}% &nbsp;·&nbsp; {w.correct}/{w.total} correct
                  </span>
                </div>
                {WEAKNESS_EXPLANATIONS[w.type] && (
                  <p className="ai-weakness-desc">{WEAKNESS_EXPLANATIONS[w.type]}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Strengths */}
      {strengths.length > 0 && (
        <div className="ai-section">
          <h3 className="ai-section-title">Your Strengths</h3>
          <div className="ai-strengths-row">
            {strengths.map(s => (
              <div key={s.type} className="ai-strength-chip">
                ✓ {s.label}
                <span className="ai-strength-pct">{s.accuracy}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="ai-section">
          <h3 className="ai-section-title">Suggested Next Focus</h3>
          <div className="ai-suggestions">
            {suggestions.map((s, i) => (
              <div key={i} className={`ai-suggestion ai-sug-${s.priority}`}>
                <div className="ai-sug-header">
                  <span className="ai-sug-icon">{s.icon}</span>
                  <span className="ai-sug-focus">{s.focus}</span>
                  {s.priority === 'high' && (
                    <span className="ai-priority-badge">Priority</span>
                  )}
                </div>
                <p className="ai-sug-tip">{s.tip}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
