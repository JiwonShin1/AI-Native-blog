export function AuthorProfile() {
  return (
    <div className="flex items-center gap-4 mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-lg font-semibold text-neutral-700 dark:text-neutral-200">
        JS
      </div>
      <div>
        <p className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
          Jiwon Shin
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Vim enthusiast and tab advocate. Passionate about static typing, clean
          code, and dark mode.
        </p>
      </div>
    </div>
  )
}
