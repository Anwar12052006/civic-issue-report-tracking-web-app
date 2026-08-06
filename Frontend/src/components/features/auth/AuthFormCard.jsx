const AuthFormCard = ({ children, badge, badgeIcon: BadgeIcon, title, subtitle }) => {
  return (
    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-5 xl:p-6 border border-gray-200/80">
      {/* Badge */}
      {badge && (
        <div className="mb-3 lg:mb-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 sm:px-3.5 sm:py-1.5 text-xs sm:text-sm font-medium text-emerald-700">
            {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            {badge}
          </span>
        </div>
      )}

      {/* Title */}
      {title && (
        <div className="mb-3 lg:mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">{title}</h2>
          {subtitle && <p className="mt-1 text-gray-500 text-xs sm:text-sm">{subtitle}</p>}
        </div>
      )}

      {children}
    </div>
  );
};

export default AuthFormCard;
