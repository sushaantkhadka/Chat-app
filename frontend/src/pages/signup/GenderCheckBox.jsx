import { styles } from "../../styles"

const GenderCheckBox = () => {
  return (
    <>
    <div className="flex justify-between items-center gap-5 font-semibold">
                <div className="form-control">
                  <label
                    className={`${styles.primary} flex justify-between items-center w-24 py-2 px-4 text-[#b5b6b9]`}
                  >
                    <span>Male</span>
                    <input
                      type="radio"
                      className="h-5 w-5"
                    />
                  </label>
                </div>

                <div className="form-control">
                  <label
                    className={`${styles.primary} flex justify-between items-center w-28 py-2 px-4 text-[#b5b6b9]`}
                  >
                    <span>Female</span>
                    <input
                      type="radio"
                      className="text-gray-500 h-5 w-5"
                    />
                  </label>
                </div>
              </div>
    </>
  )
}

export default GenderCheckBox