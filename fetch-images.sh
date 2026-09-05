#!/usr/bin/env bash
# Downloads the 5 portfolio project photos from press articles into
# images/portfolio/{id}.jpg. Run from any machine with outbound network.
#
# Usage: ./fetch-images.sh
set -euo pipefail

cd "$(dirname "$0")"
mkdir -p images/portfolio

declare -A IMAGES=(
  [the-icon]='https://republicnewsindia.com/wp-content/uploads/2024/09/Interior-Design-Project-by-Homework-by-Shagun-Singh-Details-of-the-Project-at-Icon-Gurgaon-2.jpg'
  [the-belaire]='https://republicnewsindia.com/wp-content/uploads/2024/08/1-1.jpg'
  [parsvnath-exotica]='https://republicnewsindia.com/wp-content/uploads/2024/10/Interior-Design-Project-by-Shagun-Singh-Details-of-the-Project-at-Parsvnath-Exotica-Gurgaon-4.jpg'
  [palam-vihar]='https://architectureupdate.in/wp-content/uploads/2022/10/IMG_9541-scaled.jpg'
  [experion-windchants]='https://architectureupdate.in/wp-content/uploads/2022/06/IMG-2773.jpg'
)

UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'

failed=0
for id in "${!IMAGES[@]}"; do
  url="${IMAGES[$id]}"
  out="images/portfolio/${id}.jpg"
  printf '  %-22s → %s\n' "$id" "$out"
  if ! curl -fsSL -A "$UA" -o "$out" "$url"; then
    echo "    ✗ failed" >&2
    failed=$((failed + 1))
  fi
done

echo
if [ "$failed" -gt 0 ]; then
  echo "✗ ${failed} image(s) failed. Re-run or check the URLs." >&2
  exit 1
fi

echo "✓ All 5 images downloaded to images/portfolio/"
echo
echo "Next steps:"
echo "  git add images/portfolio && git commit -m 'Add local portfolio photos'"
echo
echo "Optional: remove the 'image:' lines from PORTFOLIO in app.js to switch"
echo "from remote press-site URLs to these local files."
