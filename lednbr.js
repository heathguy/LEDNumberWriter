class lednbr {
	
	constructor(_arr, displayOffset, barWidth, barHeight, barThickness) {
		this.segA = _arr[0];
		this.segB = _arr[1];
		this.segC = _arr[2];
		this.segD = _arr[3];
		this.segE = _arr[4];
		this.segF = _arr[5];
		this.segG = _arr[6];
		
		this.offset = displayOffset;
		this.bw = barWidth;
		this.bh = barHeight;
		this.bt = barThickness;
	}
	
	showLEDNbr() {
		push();
		translate(this.offset,0);
		//draw each segment
		if(this.segA) {
			fill(255,0,0);
		} else {
			fill(255,0,0,25);
		}
		rect(0+this.bt,0,this.bw,this.bt);
		
		if(this.segB) {
			fill(255,0,0);
		} else {
			fill(255,0,0,25);
		}
		rect(this.bw+this.bt,this.bt,this.bt,this.bh);
		
		if(this.segC) {
			fill(255,0,0);
		} else {
			fill(255,0,0,25);
		}
		rect(this.bw+this.bt,this.bt*2+this.bw,this.bt,this.bh);
	
		if(this.segD) {
			fill(255,0,0);
		} else {
			fill(255,0,0,25);
		}
		rect(0+this.bt,this.bw*2+this.bt*2,this.bh,this.bt);
		
		if(this.segE) {
			fill(255,0,0);
		} else {
			fill(255,0,0,25);
		}
		rect(0,this.bt*2+this.bw,this.bt,this.bh);
		
		if(this.segF) {
			fill(255,0,0);
		} else {
			fill(255,0,0,25);
		}
		rect(0,this.bt,this.bt,this.bh);
		
		if(this.segG) {
			fill(255,0,0);
		} else {
			fill(255,0,0,25);
		}
		rect(0+this.bt,this.bt+this.bw,this.bw,this.bt);
		
		pop();
	}
}
