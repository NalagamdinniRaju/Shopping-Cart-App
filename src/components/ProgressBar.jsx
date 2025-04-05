
// import { FaGift } from "react-icons/fa";
import "../styles/ProgressBar.css";

function ProgressBar({ current, threshold }) {
  // Here Calculating percentage (capped at 100%)
  const percentage = Math.min(100, (current / threshold) * 100);
  
  //Here Calculating the remaining amount needed
  const remaining = Math.max(0, threshold - current);
  
  return (
    <div className="progress-container">
      <div className="progress-header">
        <span>Progress to Free Gift</span>
        <span>₹{current.toFixed(2)} / ₹{threshold.toFixed(2)}</span>
      </div>
      
      <div className="progress-track">
        <div 
          className="progress-bar"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={threshold}
        ></div>
        {current >= threshold && (
          <div className="gift-icon-container">
            {/* <FaGift className="gift-icon" /> */}
            🎁
          </div>
        )}
      </div>
      
      {current < threshold ? (
        <p className="progress-message">
          Add <b className="bold">₹{remaining.toFixed(2)}</b> more to get a free Wireless Mouse!
        </p>
      ) : (
        <p className="progress-message success">
          Congratulations! You've unlocked the free gift!
        </p>
      )}
    </div>
  );
}

export default ProgressBar;