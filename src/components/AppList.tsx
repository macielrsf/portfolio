import { Technology } from '../types/Technology'
import { Link } from 'react-router-dom'

interface AppListProps {
  currentPage: number
  pageSize: number
  apps: Technology[]
}

export const AppList = ({ currentPage, pageSize, apps }: AppListProps) => {
  const visibleApps = apps.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  )
  return (
    <div className="apps">
      {visibleApps.map(app => (
        <Link to={`/projects/technology/${app.slug}`} key={app._id}>
          <img src={app.appIcon} alt="" />
        </Link>
      ))}
    </div>
  )
}
