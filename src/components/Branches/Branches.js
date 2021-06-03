import React from 'react';
import './Branches.css';

function Branches(){
    return(
        <div className="branches">
            <h3>Branches</h3>
            <hr></hr>
            <div className="row">
                <div className="bt-cont"><button>CSE</button></div>
                <div className="bt-cont"><button>ISE</button></div>
                <div className="bt-cont"><button>ME</button></div>
            </div>
            <div className="row">
            <div className="bt-cont"><button>CVL</button></div>
            <div className="bt-cont"><button>BT</button></div>
            <div className="bt-cont"><button>CE</button></div>
            </div>
            <div className="row">
            <div className="bt-cont"><button>EEE</button></div>
            <div className="bt-cont"><button>ECE</button></div>
            <div className="bt-cont"><button>AE</button></div>
            </div>
            <div className="row">
            <div className="bt-cont"><button>ETE</button></div>
            <div className="bt-cont"><button>IE</button></div>
            <div className="bt-cont"><button>ME</button></div>
            </div>
        </div>
    )
}
export default Branches;