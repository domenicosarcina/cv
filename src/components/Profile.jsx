import React from "react";
import useUserStore from "../js/userStore";
import { signOut } from "firebase/auth";
import { auth } from "../js/firebase";
import { LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { user } = useUserStore();
  const { t } = useTranslation();

  if (!user) return null;

  return (
    <div className="min-h-[calc(100vh-145px)] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all">
      <div className="w-full max-w-md p-6 m-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-blue-200 dark:border-gray-700">
        <div className="flex flex-col items-center text-center">
          <img
            src={user.photoURL}
            alt="Avatar"
            className="h-24 w-24 rounded-full shadow-md mb-4 border-4 border-blue-400 dark:border-blue-600"
          />
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-1">
            {user.displayName}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {user.email}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("nameProfile")}
            </p>
            <p className="text-lg font-semibold text-blue-800 dark:text-blue-200">
              {user.displayName}
            </p>
          </div>

          <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {t("emailProfile")}
            </p>
            <p className="text-lg font-semibold text-blue-800 dark:text-blue-200">
              {user.email}
            </p>
          </div>
        </div>

        <button
          onClick={() => signOut(auth)}
          className="mt-6 w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl transition-all"
        >
          <LogOut size={20} />
          {t("logout")}
        </button>
      </div>
    </div>
  );
}
