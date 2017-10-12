#ifndef MY_WAY_H
#define MY_WAY_H

#include <string>

class WAY {
	public:
		WAY() {
			share::print("WAY CONSTRUCTION");
		}
		~WAY() {
			share::print("WAY DESTRUCTION");
		}
		bool isNot(std::string way) {
			if (isWay != way) {
				return true;
			}
			return false;
		}
		std::string get() {
			return isWay;
		}
		void set(const std::string& way) {
			isWay = way;
		}
		bool is(std::string way) {
			if (isWay == way) {
				return true;
			}
			return false;
		}
	protected:
	private:
		std::string isWay = "default";
};

#endif
