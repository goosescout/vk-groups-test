export type Privacy = "all" | "public" | "private"

export type SELECTOR_ALL = "all"

export type NO_COLOR = "no_color"

export interface FiltersSlice {
  privacy: Privacy
  /*
   * The color of the avatar of the group.
   * If undefined, then the group has no avatar.
   */
  avatarColor: string | SELECTOR_ALL | NO_COLOR
  hasFriends: boolean | SELECTOR_ALL
}
