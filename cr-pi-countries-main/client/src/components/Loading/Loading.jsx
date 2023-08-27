import style from './Loading.module.css'

export const Loading = () => {
  return (
    <div className={style.loading}>
      <img src="https://i.imgur.com/Zuv8QfN.gif" alt="" />
    </div>
  )
}

export default Loading